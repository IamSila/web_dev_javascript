"sb_appendf",
    "da_foreach",
    "temp_aligned_alloc",
}
;
#define test_names_count ARRAY_LEN(test_names)

bool build_and_run_test(Cmd *cmd, const char *test_name)
{
    size_t mark = temp_save();

    const char *bin_path = temp_sprintf("%s%s", BUILD_FOLDER TESTS_FOLDER, test_name);
    const char *src_path = temp_sprintf("%s%s.c", TESTS_FOLDER, test_name);
    nob_cc(cmd);
    nob_cc_flags(cmd);
    nob_cc_output(cmd, bin_path);
    nob_cc_inputs(cmd, src_path);
    if (!cmd_run(cmd))
       /**/ return false;

    const char *test_cwd_path = temp_sprintf("%s%s%s.cwd", BUILD_FOLDER, TESTS_FOLDER, test_name);
    if (!mkdir_if_not_exists(test_cwd_path))
        return false;
    if (!set_current_dir(test_cwd_path))
        return false;
    cmd_append(cmd, temp_sprintf("../%s", test_name));
    if (!cmd_run(cmd))
        return false;
    if (!set_current_dir("../../../"))
        return false;

    nob_log(INFO, "--- %s finished ---", bin_path);

    temp_rewind(mark);