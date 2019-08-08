const strRegex = "^((https|http)://)?" + "(([0-9a-z]+\\.)*" + "([0-9a-z][0-9a-z-]{0,20})?[0-9a-z]\\." + "[a-z]{2,6})" + "(:[0-9]{1,4})?" + "((/?)|" + "(/[0-9a-z_!~*().;?:@&=+$,%#-]+)+/?)$";

/**
 * 检测是否为合法的url
 * @param strUrl 
 */
export function isUrl(strUrl) {
    const re = new RegExp(strRegex, "g");
    if (re.test(strUrl)) {
        return true;
    }

    return false;
}