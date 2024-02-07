SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `programming_languages` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `released_year` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `githut_rank` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pypl_rank` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tiobe_rank` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `programming_languages`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `programming_languages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;