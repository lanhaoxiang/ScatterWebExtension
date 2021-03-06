import * as KEYS from '../keys';
import * as AlertTypes from '../../models/alerts/AlertTypes';

export default {
    [KEYS.ROUTENAMES_LOAD_FROM_BACKUP]:`导入Keychain`,
    [KEYS.ROUTENAMES_SETTINGS]:`设置`,
    [KEYS.ROUTENAMES_TRANSFER]:`转账`,
    [KEYS.ROUTENAMES_IDENTITIES]:`身份`,
    [KEYS.ROUTENAMES_IDENTITY]:`身份`,
    [KEYS.ROUTENAMES_PERMISSIONS]:`授权`,
    [KEYS.ROUTENAMES_DOMAIN_PERMISSIONS]:`授权`,
    [KEYS.ROUTENAMES_HISTORY]:`历史`,
    [KEYS.ROUTENAMES_NETWORKS]:`网络`,
    [KEYS.ROUTENAMES_NETWORK]:`网络`,
    [KEYS.ROUTENAMES_CHANGE_PASSWORD]:`密码`,
    [KEYS.ROUTENAMES_BACKUP]:`备份`,
    [KEYS.ROUTENAMES_EXPORT_JSON]:`备份`,
    [KEYS.ROUTENAMES_DESTROY]:`销毁`,
    [KEYS.ROUTENAMES_AUTO_LOCK]:`自动锁定`,
    [KEYS.ROUTENAMES_LANGUAGE]:`语言`,
    [KEYS.ROUTENAMES_KEYPAIRS]:`密钥对`,
    [KEYS.ROUTENAMES_KEYS]:`密钥对`,
    [KEYS.ROUTENAMES_REGISTER_ACCOUNT]:`注册`,

    [KEYS.GENERIC_New]: `新建`,
    [KEYS.GENERIC_Save]: `保存`,
    [KEYS.GENERIC_Ignored]: `已取消`,
    [KEYS.GENERIC_Identity]: `身份`,
    [KEYS.GENERIC_Contract]: `合约`,
    [KEYS.GENERIC_Action]: `操作`,
    [KEYS.GENERIC_Removed]: `已删除`,
    [KEYS.GENERIC_Name]: `名字`,
    [KEYS.GENERIC_Search]: `搜索`,
    [KEYS.GENERIC_VerifyPassword_Header]: `核对密码`,
    [KEYS.GENERIC_VerifyPassword_Description]: `您需要先验证您的当前密码，然后才能执行此操作`,
    [KEYS.GENERIC_Host]: '主机',
    [KEYS.GENERIC_Port]: '端口',
    [KEYS.GENERIC_Requires]: '需要',
    [KEYS.GENERIC_RequiredProperties]: '需要提供的信息',
    [KEYS.GENERIC_Import]: '导入',
    [KEYS.GENERIC_ChainID]: 'Chain ID',
    [KEYS.GENERIC_Blockchain]: '区块链',
    [KEYS.GENERIC_Account]: '帐户',
    [KEYS.GENERIC_Vote_Overwrite]: `覆盖投票`,
    [KEYS.GENERIC_Vote_Type]: `投票`,

    [KEYS.PLACEHOLDER_Name]: '名称',
    [KEYS.PLACEHOLDER_PublicKey]: '公钥',
    [KEYS.PLACEHOLDER_PrivateKey]: '私钥',
    [KEYS.PLACEHOLDER_FirstName]: '名字',
    [KEYS.PLACEHOLDER_LastName]: '姓',
    [KEYS.PLACEHOLDER_Email]: 'Email',
    [KEYS.PLACEHOLDER_BirthDate]: '生日',
    [KEYS.PLACEHOLDER_LocationName]: '地址名称',
    [KEYS.PLACEHOLDER_DefaultLocationName]: '家庭地址',
    [KEYS.PLACEHOLDER_Phone]: '手机',
    [KEYS.PLACEHOLDER_Address]: '地址',
    [KEYS.PLACEHOLDER_City]: '市',
    [KEYS.PLACEHOLDER_Postal]: '邮政编码',
    [KEYS.PLACEHOLDER_Country]: '国家',
    [KEYS.PLACEHOLDER_State]: '州',
    [KEYS.PLACEHOLDER_Password]: '请输入密码',
    [KEYS.PLACEHOLDER_ConfirmPassword]: '确定',
    [KEYS.PLACEHOLDER_NewPassword]: '新密码',
    [KEYS.PLACEHOLDER_ConfirmNewPassword]: '再次输入新密码',
    [KEYS.PLACEHOLDER_DomainOrIP]: '域名或 IP 地址',

    [KEYS.BUTTON_CreateIdentity]: '创建身份',
    [KEYS.BUTTON_ImportAccount]: '导入帐号',
    [KEYS.BUTTON_ImportKeychain]: '导入密钥',
    [KEYS.BUTTON_SelectFile]: '选择文件',
    [KEYS.BUTTON_AddNewLocation]: '增加地址',
    [KEYS.BUTTON_SetAsDefaultLocation]: '设置为缺省地址',
    [KEYS.BUTTON_RemoveLocation]: '删除地址信息',
    [KEYS.BUTTON_ChangePassword]: '更改密码',
    [KEYS.BUTTON_DestroyScatter]: '删除钱包',
    [KEYS.BUTTON_CreateNewScatter]: '创建新的钱包',
    [KEYS.BUTTON_LoadFromBackup]: '从备份中恢复',
    [KEYS.BUTTON_Unlock]: '解锁',
    [KEYS.BUTTON_ExportScatter]: '导出 GXC Wallet',
    [KEYS.BUTTON_GenerateKeyPair]: '生成密钥对',
    [KEYS.BUTTON_Validate]: '验证',
    [KEYS.BUTTON_Copy]: '复制',
    [KEYS.BUTTON_ChangeLanguage]: '更改语言',
    [KEYS.BUTTON_Cancel]: '取消',
    [KEYS.BUTTON_Accept]: '接受',
    [KEYS.BUTTON_Deny]: '拒绝',
    [KEYS.BUTTON_Yes]: '确定',
    [KEYS.BUTTON_No]: '取消',
    [KEYS.BUTTON_UseSelectedAccount]: '使用选择的帐户',
    [KEYS.BUTTON_SelectIdentity]: '选择身份',
    [KEYS.BUTTON_Selected]: '已选择',
    [KEYS.BUTTON_NotSelected]: '未选择',
    [KEYS.BUTTON_ChangeName]: '更改名称',
    [KEYS.BUTTON_ClaimIdentity]: '身份认领',
    [KEYS.BUTTON_RegisterIdentity]: '身份注册',


    [KEYS.MAINMENU_Identities]: '身份',
    [KEYS.MAINMENU_Keys]: '密钥对',
    [KEYS.MAINMENU_Register]: '注册',
    [KEYS.MAINMENU_Permissions]: '授权管理',
    [KEYS.MAINMENU_History]: '事件',
    [KEYS.MAINMENU_Lock]: '锁定',

    [KEYS.IDENTITIES_Header]: `你目前尚未建立身份。`,
    [KEYS.IDENTITIES_Description]: `
        身份是包含个人信息的统称，它包括姓名，地址和多个区块链帐号/密钥对。
        身份包括了能证明其所有权的密钥对，使得应用无需密也能进行验证.
    `,

    [KEYS.IDENTITY_DisablingHeader]: `禁用身份意味着什么?`,
    [KEYS.IDENTITY_DisablingDescription]: `
        禁用身份，将会阻止引用它的应用使用此身份。
        可以用来代替难以恢复的永久删除身份
        或删除它在应用程序上的权限.
    `,

    [KEYS.IDENTITY_NameHeader]: `身份名称`,
    [KEYS.IDENTITY_NameDescription]: `
        应用程序可能选择使用此名称作为你的用户名，因为它在所有网络中都是唯一的。
        如果您未在 RIDL 注册，将会分配一个随机的名称给你。
    `,
    [KEYS.IDENTITY_NoKeyPairsHeader]: `没有密钥对!`,
    [KEYS.IDENTITY_NoKeyPairsDescription]: `
        在将区块链账户添加到此身份之前，您需要添加一些密钥对。 请转到主菜单选择：
    `,
    [KEYS.IDENTITY_AccountHeader]: `帐户`,
    [KEYS.IDENTITY_AccountDescription]: `
        账户保存有您的资金，并且让您与区块链上的合约进行交互。
        身份可以视为与你的护照相关联的银行帐号，
        可以随时更改。
    `,
    [KEYS.IDENTITY_PersonalHeader]: `个人信息`,
    [KEYS.IDENTITY_PersonalDescription]: `
        个人信息可以添加到需要它的应用程序的帐户中。 例如购物网站
        可能需要您的姓名，作为您所购买商品的收件人。
    `,
    [KEYS.IDENTITY_LocationHeader]: `地址信息`,
    [KEYS.IDENTITY_LocationDescription]: `
        地址信息可以添加到需要它的应用程序的帐户中。
        例如，为了知道您购买的商品的送货地点，购物网站可能
        需要这些信息以便知道送货地点
     `,

    [KEYS.PERMISSIONS_Header]: `没有需要显示的授权.`,
    [KEYS.PERMISSIONS_Description]: `
        显示你授权给应用的身份，或把一个合约行为列入白名单，
        使其能无需经过弹出窗口确认就能够签署授权。
    `,
    [KEYS.PERMISSION_RevokeIdentity]: `删除身份`,
    [KEYS.PERMISSION_RevokeContract]: `撤消合约`,
    [KEYS.PERMISSION_RevokeAction]: `取消操作`,

    [KEYS.HISTORIES_Header]: `没有需要显示的历史事件.`,
    [KEYS.HISTORIES_Description]: `
        在此您能看到所有 GXC Wallet 的事件列表.
        但在您的 GXC Wallet 外的帐户上发生的事件不会显示.
     `,
    [KEYS.HISTORIES_Note]: `
        注意：当从设置面板中的备份选项中导出您的 GXC Wallet 数据时，不会备份这些事件。
        所以当您再次导入时，您的历史记录是空的。如果你想导出这些历史事件，
        将来您可以使用此面板中导航栏上的操作按钮来完成此操作。
    `,

    [KEYS.TIP_Edit]: `修改`,
    [KEYS.TIP_Cancel]: `取消`,
    [KEYS.TIP_Remove]: `删除`,
    [KEYS.TIP_Load]: `加载`,
    [KEYS.TIP_Copy_Pub]: `复制公钥`,
    [KEYS.TIP_Copy_Pri]: `复制私钥`,



    [KEYS.SETTINGSMENU_Networks]: '网络',
    [KEYS.SETTINGSMENU_Keypairs]: '密匙对',
    [KEYS.SETTINGSMENU_Language]: '语言',
    [KEYS.SETTINGSMENU_AutoLock]: '自动锁定',
    [KEYS.SETTINGSMENU_Password]: '密码',
    [KEYS.SETTINGSMENU_Backup]: '备份',
    [KEYS.SETTINGSMENU_Destroy]: '销毁',

    [KEYS.BACKUP_Header]: `导出加密备份`,
    [KEYS.BACKUP_Description]: `
        导出您的 GXC Wallet 后，您将可以将其导入其他设备。导出文件将被加密，
        所以请注意备份你的助记符和密码。否则将不能导入。
        导出的文件中将只保留你的身份私钥，
        帐户中的其它所有私钥将不会导出。
    `,

    [KEYS.IMPORT_Header]: `导入加密的备份`,
    [KEYS.IMPORT_Description]: `
        导入你的加密钥匙串文件将重建您的 GXC Wallet 钥匙串，但是它不会导入您原有的网络
        或帐户设置
    `,
    [KEYS.IMPORT_Keypair]: `导入密钥对`,
    [KEYS.IMPORT_Keypair_Description]: `导入您的GXChain私钥，我们会通过您的钱包密码对其加密存储Identities。`,
    [KEYS.IMPORT_Keypair_Button]: (blockchain) => {
        return `导入${blockchain}密钥对`
    },
    [KEYS.IMPORT_Success_Title]: `导入成功`,
    [KEYS.IMPORT_Success_Description]: (blockchain) => {
        return `你现在已经有一个绑定了${blockchain}账户的GXC Wallet身份了。
                    <br><br>
                    你可以去身份编辑其他信息，这些信息可能一些dapp会需要，但并不是强制的。
                    <br><br>
                    请尽情享用GXC Wallet吧！`
    },
    [KEYS.IMPORT_Success_Button]: `返回主页`,

    [KEYS.PASS_Header]: `设置新密码`,
    [KEYS.PASS_Description]: `
        您原来所有加密保存的信息将被解密，
        然后会重新使用新密码加密。
    `,

    [KEYS.NETWORK_Header]: `添加网络`,
    [KEYS.NETWORK_Description]: `
        应用通常会使用自己特定的网络，而不是全部运行在
        同一个网络上，例如，为了使用尚未发布的新功能，
        应用有可能使用测试网络，为了与这个网络互动，
        需要这个网络上的帐号。
    `,

    [KEYS.DESTROY_Header]: `销毁 GXC Wallet`,
    [KEYS.DESTROY_Description]: `
        您即将销毁您的整个 GXC Wallet 钥匙串。恢复 GXC Wallet 的唯一方法是
        导入以前导出的 GXC Wallet JSON 文件。 否则你将没有办法再使用你的身份。
        请确保在着手这个操作前，已经从备份设置面板中导出了您的 GXC Wallet。
    `,
    [KEYS.DESTROY_Confirms]: [
        `正在销毁GXC Wallet`,
        `请再一次确保你已经完成备份，销毁后恢复的唯一方式是备份文件`
    ],

    [KEYS.LANGUAGE_Header]: `选择语言`,

    [KEYS.KEYPAIRS_NoKeyPairsHeader]: `您没有密钥对。`,
    [KEYS.KEYPAIRS_NoKeyPairsDescription]: `
        点击右上方的按钮来建立或导入密钥。
    `,

    [KEYS.KEYPAIR_Header]: `生成一个新的密钥对`,
    [KEYS.KEYPAIR_Description]: `
        您可以通过此界面来生成 GXC 密钥对。密钥对是在你本地机器上生成并且不会被传送到其它任何地方。
        您还可以粘贴密钥对并检查私钥是否与公钥匹配，
        注意，这些密钥是使用从计算机上收集的各种数据生成，而不是使用任何特定的种子。
    `,
    [KEYS.KEYPAIR_Validation_Header]: `生成一个新的密钥对`,
    [KEYS.KEYPAIR_Validation_Valid]: `私钥有效，并且由其生成的公钥与提供的公钥相匹配。`,
    [KEYS.KEYPAIR_Validation_Invalid]: `由私钥生成的公钥与提供的公钥不匹配！`,


    [KEYS.LOCK_Header]: `自动锁定设置`,
    [KEYS.LOCK_Description]: `
        自动锁定能为您自动锁定 GXC Wallet，
        这样你就不必在离开时记得锁定您的 GXC Wallet。
    `,
    [KEYS.LOCK_Minute]: `分`,
    [KEYS.LOCK_Minutes]: `分`,
    [KEYS.LOCK_Hour]: `小时`,
    [KEYS.LOCK_Hours]: `小时`,
    [KEYS.LOCK_NeverLock]: `从不锁定`,


    [KEYS.MNEMONIC_Header]: `助记词`,
    [KEYS.MNEMONIC_Description]: `助记词是可以用来生成密钥的一组单词。`,
    [KEYS.MNEMONIC_Note]: `
        请一定要保存在安全的地方。如果您忘记了密码，
        这是恢复对 GXC Wallet 的访问和解密您的个人信息的唯一途径。
    `,
    [KEYS.MNEMONIC_Wrote]: `我记录下来了`,


    [KEYS.ONBOARDING_Title]: `欢迎使用`,
    [KEYS.ONBOARDING_Desc1]: `此软件的开发团队没有责任保证您的资产绝对不丢失，你有责任不断确保你的电脑没有恶意软件。我们已采取各种措施来确保插件的使用安全。请知道，最大的安全隐患是你的计算机本身。`,
    [KEYS.ONBOARDING_Desc2]: `通过使用本软件，您将放弃对开发团队采取法律行动的任何权利，并将自己视为您自己的钱包、密钥和数据的唯一合法所有者。`,
    [KEYS.ONBOARDING_Import]: `导入已有私钥`,
    [KEYS.ONBOARDING_Reg]: `创建GXChain账户`,
    [KEYS.ONBOARDING_SKIP]: `跳过引导`,


    [KEYS.ERROR_MustSelectItem]: `必选项.`,

    [KEYS.ALERT_Type]: (type) => {
        switch (type) {
            case AlertTypes.Error:
                return '错误';
            case AlertTypes.Prompt:
                return '提示';
            case AlertTypes.SelectAccount:
                return '选择帐户';
        }
    },

    //2
    [KEYS.ALERT_BadIdentityName]: [
        '错误的身份名',

        `身份名的长度必须在3到20个字符之间。
         它们也必须是字母数字，但也可以包含空格，破折号和下划线。`
    ],
    //2
    [KEYS.ALERT_IdentityNameExists]: [
        '身份名已存在',

        '此身份名已经补其它身份注册。'
    ],
    //2
    [KEYS.ALERT_NoSuchIdentityName]: [
        '没在此身份名称',

        '此身份的名称在 RIDL 中未保留。'
    ],
    //2
    [KEYS.ALERT_KeyPairExists]: [
        '密钥对已经存在',

        '此密钥对已在您的钥匙串上注册。'
    ],
    //2
    [KEYS.ALERT_BadKeyPairName]: [
        '错误的密钥对名称',

        '密钥对名称不能相同。'
    ],
    //2
    [KEYS.ALERT_InvalidPrivateKey]: [
        '私钥不正确',

        `您输入的私钥不正确，请检查后重试。`
    ],
    //2
    [KEYS.ALERT_NoAccountsFound]: [
        '未找到帐户',

        `没有找到与此私钥相关联的帐户。
         如果您导入的不是 GXC Wallet 生成的私钥，
         需要在导入前为这个私钥先建一个帐户`

    ],
    //2
    [KEYS.ALERT_PasswordsDoNotMatch]: [
        '密码不匹配',

        `您输入的密码与确认信息不符。`
    ],
    //2
    [KEYS.ALERT_BadPassword]: [
        '密码无效',

        '密码长度至少 8 个字符'
    ],
    //2
    [KEYS.ALERT_WrongPassword]: [
        '密码不正确',

        '您输入的密码不正确。'
    ],
    //2
    [KEYS.ALERT_NetworkHostInvalid]: [
        '无效的主机',

        `您输入的主机无效。
         主机应该为域名( 例: testnet.eos.io ) 或者 IP 地址 ( 如: 192.168.0.1 ).`
    ],
    //2
    [KEYS.ALERT_NetworkExists]: [
        '已经存在相同的网络',

        '具有此主机和端口的另一个网络已存在。 相同的网络不用再次保存。'
    ],
    //2
    [KEYS.ALERT_RemovingEndorsedNetwork]: [
        '不能删除支撑网络',

        `您不能删除 GXC Wallet 的支撑网络。`
    ],
    //2
    [KEYS.ALERT_NoIdentityWithProperties]: fields => [
        '末发现身份',

        `此应用正在请求您的身份所没有的信息： '${fields.join(', ')}'`
    ],
    //2
    [KEYS.ALERT_YouMustSelectAnIdentity]: [
        '您需要选择一个身份',

        `如果你不想公开身份，你可以按拒绝按钮，
         否则必须选择一个身份以接受此请求。`
    ],
    //2
    [KEYS.PROMPT_DestroyingScatter]: [
        '销毁 GXC Wallet',

        '这是您最后一次检查备份的机会。'
    ],
    //2
    [KEYS.PROMPT_RevokingIdentity]: domain => [
        '删除身份',

        `您即将删除身份： ${domain} 。
        这将删除身份本身权限及其内的所有合约的权限。`
    ],
    //2
    [KEYS.PROMPT_RevokingContract]: domain => [
        '撤销合约',

        `您即将从 ${domain} 中撤销整个合约。 这将删除合约中的所有操作的权限。`
    ],
    //2
    [KEYS.PROMPT_RevokingContractAction]: domain => [
        '撤销合约操作',

        `你即将从 ${domain} 中撤销一项合约操作`
    ],
    //2
    [KEYS.PROMPT_RemovingIdentity]: name => [
        '移除身份',

        `您即将删除名称为 '${name}' 的身份。 删除身份不可逆
        并且所有的权限也将删除。 如果在应用中使用身份，也许您应该禁用它。`
    ],
    //2
    [KEYS.PROMPT_DeletingKeyPair]: identities => [
        '删除密钥对',

        identities.length ? `密钥对使用在: '${identities.join(', ')}'` : `这个密钥对没有在任何身份上使用。`
    ],
    //2
    [KEYS.PROMPT_RemovingAccount]: formattedAccountName => [
        '移除帐户',

        `您将从此身份中移除 ${formattedAccountName} 帐户`
    ],
    //2
    [KEYS.PROMPT_RemovingNetwork]: [
        '移除网络',

        `您即将删除网络。 删除该网络后
         您将不能再在该网络上创建新帐户，
         但你可以重新添加它。
         已经使用此网络的帐户将不会被修改或删除。`
    ],
    //2
    [KEYS.PROMPT_WhitelistingContractAction]: [
        '您将要将一个智能合约列入白名单',

        `将基于货币的合约列入白名单是危险的，永远不应该这样做。
         但在某些情况下，可以这样做，但除非您确定，否则您不应将此合约操作列入白名单。
         您确定想将此列入白名单吗？`
    ],
    //2
    [KEYS.PROMPT_SelectAccount]: [
        '选择帐户',

        '选择您希望用于此身份的帐户和权限。一次只能选择一个。'
    ],
    //2
    [KEYS.PROMPT_ClaimIdentity]: [
        'Claim Identity',

        'Put in the private key that matches the public key on file for your identity name.'
    ],

    //3
    [KEYS.REQUEST_AddNetwork]: [
        /*{DOMAIN}*/ '想要将他们的网络添加到 GXC Wallet。',

        '一些应用使用它们自己的网络。',

        `应用决不会被允许访问您的 GXC Wallet。
         通过此界面添加网络。
         仅是为了比在控制面板中手工添加更方便`
    ],
    //5
    [KEYS.REQUEST_Identity]: [
        /*{DOMAIN}*/ '正请求更多的信息。',

        `有时，应用会需要更多信息，
         例如您的电子邮件或出生日期。
         右侧的身份标识就是您在网络上拥有的可用的特定信息。`,

        `即使你提供了一个应用并没有请求的标识信息，
         应用也永远不能够访问到这些信息，
         甚至不会知道它们的存在。`,

        `只有身份的公钥和名称都会提供给应用。`,

        /*{DOMAIN}*/ `没有请求任何附加信息。 他们唯一需要的是身份哈希和名称`
    ],
    //2
    [KEYS.REQUEST_IdentityNoIdentities]: [
        `您没有与此应用程序需要的字段匹配的身份信息。`,

        `如果您想使用此应用程序，您需要更新身份中的信息。
        您可以在左侧面板上看到该应用需要哪些信息。`
    ],
    //4
    [KEYS.REQUEST_SignatureWhitelist]: [
        `你想把这个合约操作列入白名单吗？`,

        `您可以将此操作列入白名单，下次您就不必再次手动授权。 每一个旁边有单选按钮的属性都将变得可以更改，这意味着您可以允许 此事务的某些属性的更改，并且仅当其他属性发生更改时，不会被列入白名单。`,

        `这包括所需的个人信息，并且对您的身份的更改不会删除权限。`,

        `如果您设有多个地点，当事务需要一个地点时，将会提示你您选择`
    ],
    //4
    [KEYS.REQUEST_ScatterIsLocked]: [
        `GXC Wallet 已锁定!`,

        `需要解锁才能进一步操作.`,

        `我们不会显示一个需要你登录的提示/弹出窗口.`,

        `如果您看到一个提示/弹出窗口，需要你输入密码，它肯定是一个试图获取您的密码的恶意网站，
         确保只使用点击浏览器的插件托盘图标后弹出的窗口来解锁.`
    ],
    //4
    [KEYS.REQUEST_UpdateVersion]: [
        `GXC Wallet 需要更新版本!`,

        /*{DOMAIN}*/ `要求使用更新后的版本.`,

        `使用的应用需要一个已经发布的新的功能，但是你安装的版本不支持.`,

        `注意，我们让应用能够检查 GXC Wallet 的版本，但它们有可能让你下载恶意程序，请确保从正确的地址下载 GXC Wallet.`
    ],

    // GXC
    [KEYS.GXC_TRANSFER_CODE]: `无`,
    [KEYS.GXC_TRANSFER_TYPE]: `转账`,
    [KEYS.GXC_TRANSFER_RICARDIAN]: `开发者向您申请转账，请谨慎操作！`,
    [KEYS.GXC_REGISTER_SUC]: [
        `注册成功`,
        `请复制并保管好您的私钥，一旦丢失将无法找回。`,
        ``
    ],
    [KEYS.KEYPAIRS_Password]: [
        `密码`,
        ``,
        ``
    ],
    [KEYS.GXC_REGISTER_FAIL]: `注册失败`,
    [KEYS.GXC_REGISTER_REPEAT]: `该账户已注册`,
    [KEYS.GXC_ALERT_NOT_REGISTER]: [
        `尚未注册`,
        `请先注册账户`
    ],
    [KEYS.GXC_ACCOUNT_NAME_ERROR]: '账户名不符合规则',

    [KEYS.REGISTER_HEADER]: '注册账户',
    [KEYS.REGISTER_DESCRIPTION]: `在选择的网络下注册GXChain账户。`,
    [KEYS.REGISTER_TIPS]: '没有账户？请点击GXC Wallet图标到首页注册。',
    [KEYS.REGISTER_SUC_HEADER]: '注册成功',
    [KEYS.REGISTER_SUC_DESCRIPTION]: '点击保存，将账户保存在GXC Wallet中。',

    [KEYS.GXC_ACCOUNT_ERROR_EMPTY_NAME]: '账户名不可为空',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SHOULD_BE_LONGER]: `账户名至少3位`,
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SHOULD_BE_SHORTER]: '账户名过长',
    [KEYS.GXC_ACCOUNT_ERROR_PREMIUM_NAME]: '你使用的是高级账户名,请选择其他名字，包含至少一个横杠、数字或者不含元音字母',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SHOULD_START_WITH_A_LETTER]: '账户名需以字母开头',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_FORMAT_ERROR]: '账户名只能是字母、数字和-的组合',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_ONE_DASH_ERROR]: '-只能使用一次',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_END_ERROR]: '账户名需要以字母或数字结尾',
    [KEYS.GXC_ACCOUNT_ERROR_NAME_SEGMENT_SHOULD_BE_LONGER]: '账户名过短，.分割的部分应超过3位',
    [KEYS.BACK]: '返回',
}