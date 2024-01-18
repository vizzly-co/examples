import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/textOverrides/Translations',
  component: Vizzly.Dashboard,
};

export default meta;

export const Translations: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      textOverrides={{
        start_date: 'Date de début',
        time: 'Temps',
        end_date: 'Date de fin',
        clear_date: 'Effacer les dates',
        custom_range: 'Plage personnalisée',
        function: 'Fonction',
        remove: 'Retirer',
        no_options: "Pas d'options",
        remove_pill: 'Retirer [[label]]',
        select_empty: 'Sélectionner...',
        'ai.ask_a_question_or_pick_a_suggestion':
          'Posez une question ou choisissez une suggestion :',
        back_to_editor: "Retour à l'éditeur",
        new_chat: 'Nouveau chat',
        'ai.new_chat_modal_message':
          'Êtes-vous sûr de vouloir commencer un nouveau chat ? Cela supprimera toutes vos modifications actuelles.',
        'ai.new_chat_modal_cta': 'Commencer un nouveau chat',
        'ai.ask_me_a_question': 'Posez-moi une question...',
        stop_question: 'Arrêter la question',
        submit_question: 'Soumettre la question',
        'ai.ai_may_hallucinate':
          "Les réponses peuvent être inexactes ; vérifiez les détails dans l'éditeur.",
        'ai.you': 'Vous',
        refetch_response: 'Récupérer la réponse',
        'ai.good_response': 'Bonne réponse',
        'ai.bad_response': 'Mauvaise réponse',
        show_this_change: 'Montrer ce changement',
        single_select: 'Sélection unique',
        multi_select: 'Sélection multiple',
        date_picker: 'Sélecteur de date',
        date_time_picker: 'Sélecteur de date et heure',
        new_filter: 'Nouveau filtre',
        title: 'Titre',
        data_sets: 'Jeux de données',
        data_sets_placeholder:
          'Quels jeux de données ce filtre affectera-t-il ?',
        filter_type: 'Type de filtre',
        fields: 'Champs',
        fields_placeholder: 'Quels champs ce filtre affectera-t-il ?',
        cancel: 'Annuler',
        confirm: 'Confirmer',
        warning_no_field_on_this_filter:
          "Il n'y a pas de champ dans ce filtre. Il devrait être supprimé ou un champ ajouté.",
        'additional_filters.filter_type_subtext': {
          sentence:
            '[[filterType]] pour [[numberOfFields]] {{field}} [[listOfFields]]',
          field_singular: '',
          field_plural: '',
        },
        dashboard_filters: 'Filtres du tableau de bord',
        add_local_filters: 'Ajouter des filtres locaux',
        new_dashboard_filter: 'Nouveau filtre de tableau de bord',
        new_local_filter: 'Nouveau filtre local',
        close: 'Fermer',
        click_settings: 'Paramètres de clic',
        view_id: 'ID de vue',
        protected_measure_select: 'Mesure protégée [[type]]',
        'protected-grouping-fields': 'Champs de regroupement protégés',
        advanced_options: 'Options avancées',
        'dashboard-filters.call-to-action': 'Filtrer par',
        are_you_sure: 'Êtes-vous sûr ?',
        delete: 'Supprimer',
        full_data_set_desription:
          "Téléchargez les données sous-jacentes utilisées dans cette vue. Jusqu'à [[maxCSVDownloadLimit]] lignes.",
        data_download: 'Téléchargement de données',
        full_data_set: 'Jeu de données complet',
        view_data_set: 'Voir le jeu de données',
        view_data_set_description:
          'Téléchargez les données que vous voyez dans cette vue.',
        select_download_type: 'Sélectionner le type de téléchargement',
        download: 'Télécharger',
        add_alternative_group: 'Ajouter un groupe alternatif',
        add_alternative_time_group: 'Ajouter un groupe de temps alternatif',
        add_alternative_metric: 'Ajouter une métrique alternative',
        add_parameters: 'Ajouter des paramètres',
        add_parameters_tooltip:
          'Définir des métriques et des groupes alternatifs pour la vue.',
        add_parameter_metrics: 'Métriques',
        add_parameter_groups: 'Groupes',
        current_active_metrics: 'Métriques actives actuelles',
        current_active_groups: 'Groupes actifs actuels',
        update: 'Mettre à jour',
        format: 'Format',
        confirm_reset: 'Confirmer la réinitialisation',
        delete_all_dashboard_content:
          'Tous les changements que vous avez effectués seront perdus et le tableau de bord par défaut sera restauré.',
        reset_dashboard: 'Réinitialiser le tableau de bord',
        reset_dashboard_to_default:
          'Réinitialiser le tableau de bord par défaut',
        reset: 'Réinitialiser',
        empty_state_call_to_action:
          'Construisez un tableau de bord avec vos données et impressionnez votre client.',
        add_view_call_to_action: '+ Ajouter une vue',
        select_template: 'Sélectionner un modèle',
        delete_view_from_dashboard_message:
          'Cette vue sera supprimée de votre tableau de bord.',
        edit_components_on_dashboard: 'Modifier',
        edit_components_on_library: 'Modifier',
        merge: 'Fusionner',
        unmerge: 'Séparer',
        remove_component_from_library: 'Retirer',
        remove_component_from_dashboard: 'Retirer',
        remove_cell_from_dashboard: 'Retirer',
        manage_reports: 'Rapports',
        cell_options: 'Options',
        drag_to_move: 'Glisser pour déplacer',
        'header.new_header': 'Nouvel en-tête',
        add_row: 'Ajouter une ligne',
        choose_a_prefix: 'Choisir un préfixe',
        field: 'Champ',
        prefix: 'Préfixe',
        save: 'Enregistrer',
        verified_by_with_organization: 'Vérifié par [[organizationName]]',
        verified: 'Vérifié',
        update_header: "Mettre à jour l'en-tête",
        header_title: 'Titre',
        field_protected: 'Champ protégé',
        cannot_delete_modal_content_with_org_name:
          'Ce champ a été protégé par [[organizationName]] et ne peut pas être supprimé.',
        cannot_delete_modal_content_without_org_name:
          "Ce champ a été protégé par l'administrateur et ne peut pas être supprimé.",
        add_percentage_and_absolute_change:
          'Ajouter un pourcentage et un changement absolu',
        agg_maths_add_remove_button: '[[ajouter|supprimer]] calcul imbriqué',
        add: 'Ajouter',
        metrics_operators_need_defined:
          "Les métriques et l'opérateur doivent être définis",
        metric_name: 'Nom de la métrique',
        select_math_type: 'Sélectionner le type de calcul',
        metric_number: 'Métrique [[metricNumber]]',
        create: 'Créer',
        subtract: 'Soustraire',
        multiply: 'Multiplier',
        divide: 'Diviser',
        select_operator: 'Opérateur...',
        operator: 'Opérateur',
        'percentage.simple_label': 'Simple',
        'percentage.simple_description':
          'Métrique en pourcentage sans filtre de numérateur',
        'percentage.conditional_label': 'Conditionnel',
        'percentage.conditional_description':
          'Appliquer des filtres conditionnels au numérateur',
        numerator: 'Numérateur',
        'percentage.select_type': 'Sélectionner le type de pourcentage',
        metric: 'Métrique',
        denominator: 'Dénominateur',
        select_field_to_transform: 'Sélectionner le champ à transformer',
        rule_title: 'Règle [[ruleNumber]]',
        field_value: 'Valeur du champ',
        add_or_filter: 'Ajouter un filtre `OU`',
        delete_rule: 'Supprimer la règle',
        add_rule: 'Ajouter une règle',
        fields_being_used: 'Champs utilisés',
        fields_being_used_description:
          'Les champs suivants sont utilisés dans cette métrique personnalisée. Vous devez supprimer la métrique personnalisée avant de pouvoir supprimer ces champs.',
        cannot_find_data_set: 'Impossible de trouver le jeu de données.',
        add_custom_metric: 'Ajouter une métrique personnalisée',
        delete_custom_metric:
          'Cela supprimera définitivement le champ personnalisé [[nameOfCustomMetric]] de toutes les vues sur le tableau de bord, pas seulement de cette vue. Êtes-vous sûr de vouloir continuer ?',
        add_comparison: 'Ajouter une comparaison',
        add_drilldown: 'Ajouter un drilldown',
        drilldown_field: 'Champ de drilldown',
        add_drilldown_field: 'Ajouter un champ de drilldown',
        filter_or: 'ou',
        value: 'Valeur',
        remove_filter: 'Supprimer le filtre',
        values: 'Valeurs',
        filter_list_title: {
          sentence: '[[filterCount]] {{condition}}',
          condition_singular: '',
          condition_plural: '',
        },
        filter_list_subtext: {
          sentence: '{{acrossFields}} [[fields]].',
          acrossFields_singular: '',
          acrossFields_plural: '',
        },
        add_filter: 'Ajouter un filtre',
        advanced_filters: 'Filtres avancés',
        add_metric: 'Ajouter une métrique',
        goal_set_to: 'Objectif fixé à',
        add_progress_metric: 'Ajouter une métrique de progression',
        goal: 'Objectif',
        math_op_is_null: 'Est nul',
        math_op_is_not_null: "N'est pas nul",
        dataset: 'Jeu de données',
        'pre-aggregated_data_set_title': 'Jeu de données pré-agrégé',
        'pre-aggregated_data_set_description':
          'Ce jeu de données a déjà été agrégé, donc certaines propriétés de données ont déjà été définies.',
        view: 'Vue',
        asc: 'Ascendant',
        desc: 'Descendant',
        add_sort: 'Ajouter un tri',
        add_time_dimension: 'Ajouter une dimension temporelle',
        'combo_chart.data_panel.dimension.line': 'Ligne',
        'combo_chart.data_panel.dimension.bar': 'Barre',
        'combo_chart.data_panel.dimension.time': 'Temps',
        limit: 'Limite',
        'editor.tab.heading.data': 'Données',
        'editor.tab.heading.format': 'Format',
        editor: 'Éditeur',
        ask_ai: "Demander à l'IA",
        add_to_library: 'Ajouter à la bibliothèque',
        'library.no_view_in_library':
          "Il n'y a aucune vue dans votre bibliothèque de modèles",
        'library.create_new': 'Créer nouveau',
        'library.select_template': 'Sélectionner un modèle',
        'library.add_to_dashboard': 'Ajouter au tableau de bord',
        'library.no_results': 'Votre bibliothèque est vide',
        'library.search_library': 'Rechercher dans la bibliothèque',
        'library.search_returned_no_results':
          "Votre recherche n'a donné aucun résultat",
        add_header_tooltip: "Ajouter une ligne d'en-tête",
        add_header: 'Ajouter un en-tête',
        add_cell_tooltip: 'Ajouter une cellule à la ligne',
        add_cell: 'Ajouter une cellule',
        set_report_schedule: 'Définir le calendrier du rapport',
        select_schedule: 'Sélectionner un calendrier',
        auto: 'Automatique',
        minimal: 'Minimal',
        None: 'Aucun',
        hide_labels: 'Masquer les étiquettes',
        grouped: 'Groupé',
        stacked: 'Empilé',
        stacked_100prc: 'Empilé (100%)',
        natural: 'Naturel',
        straight: 'Droit',
        step: 'Étape',
        add_conditional_formatting: 'Ajouter un formatage conditionnel',
        'color_format.single': 'Simple',
        'color_format.gradient': 'Dégradé',
        select_percentage_type: 'Sélectionner le type de pourcentage',
        start_color: 'Couleur de départ',
        color: 'Couleur',
        end_color: 'Couleur de fin',
        display_conditional_format_configuration:
          'Si <strong>[[fieldName]] [[fieldFunction]]</strong> est <strong>[[operator]]</strong> <strong>[[value]]</strong> alors la couleur est',
        error: 'Erreur',
        invalid_rule: 'Règle invalide',
        add_condition: 'Ajouter une condition',
        add_goal_line: "Ajouter une ligne d'objectif",
        goal_line_configuration: 'Régler à <strong>[[ruleValue]]</strong>',
        background: 'Arrière-plan',
        no_data: 'Pas de données',
        min_value: 'Valeur minimale',
        max_value: 'Valeur maximale',
        add_prefix: 'Ajouter un préfixe',
        linear: 'Linéaire',
        circular: 'Circulaire',
        type: 'Type',
        stats_label_warning:
          'Veuillez sélectionner une métrique sur le panneau des données.',
        'number_format_option.noValueReplacement': 'Pas de valeur',
        'number_format_option.formattingError': 'Erreur de formatage',
        'number_format_option.compact': 'Compact',
        'number_format_option.to_2_dp': '2 décimales',
        'number_format_option.currency_gbp': 'Devise £',
        'number_format_option.currency_usd': 'Devise $',
        'number_format_option.currency_eur': 'Devise €',
        'number_format_option.percentage': 'Pourcentage',
        'number_format_option.separated': 'Séparé',
        'number_format_option.number': 'Nombre',
        'number_format_option.minutes_to_hours_minutes':
          'Minutes en heures et minutes',
        'custom_metric_title.math': 'Mathématiques',
        'custom_metric_description.math':
          'Calculer à partir de plusieurs valeurs',
        'custom_metric_title.rules_based_groups':
          'Groupes basés sur des règles',
        'custom_metric_description.rules_based_group':
          'Créer des groupes basés sur des conditions',
        'custom_metric_title.percentage': 'Pourcentage',
        'custom_metric_description.percentage':
          'Calculer un pourcentage dans un champ',
        'custom_metric_title.number_formatting': 'Nombre arrondi',
        'custom_metric_description.number_formatting':
          'Arrondir un champ numérique',
        custom_metric_modal_title:
          'Métrique personnalisée [[custom_metric_title]]',
        date_filter: 'Filtre de date',
        date_time_filter: 'Filtre de date et heure',
        single_select_filter: 'Filtre de sélection unique',
        multi_select_filter: 'Filtre de sélection multiple',
        untitled: 'Sans titre',
        'filter.today': "Aujourd'hui",
        'filter.past_1_day': 'Dernières 24 heures',
        'filter.yesterday': 'Hier',
        'filter.past_3_days': '3 derniers jours',
        'filter.past_7_days': '7 derniers jours',
        'filter.past_30_days': '30 derniers jours',
        'filter.past_90_days': '90 derniers jours',
        'filter.past_3_months': '3 derniers mois',
        'filter.past_6_months': '6 derniers mois',
        'filter.past_12_months': '12 derniers mois',
        'filter.past_18_months': '18 derniers mois',
        count_distinct: 'Compter distinct',
        list_of_values_and: 'et',
        'bar_chart.title': 'Diagramme en colonnes',
        'bar_chart.description':
          'Utilise des barres pour comparer différents ensembles de données.',
        'bar_chart.data_panel.data_set.title': 'Jeu de données',
        'bar_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce diagramme en barres ?',
        'bar_chart.data_panel.views.title': 'Vue',
        'bar_chart.data_panel.field_y_axis.title': 'Métrique - Axe Y',
        'bar_chart.data_panel.field_y_axis.description':
          'Que voulez-vous que chaque barre mesure ?',
        'bar_chart.data_panel.field_y_axis.call_to_action':
          'Ajouter une métrique',
        'bar_chart.data_panel.drilldown.title': 'Drilldown',
        'bar_chart.data_panel.drilldown.description':
          'Après avoir cliqué sur un segment de ce diagramme en barres, quelles informations souhaitez-vous voir ensuite ?',
        'bar_chart.data_panel.field_x_axis.title': 'Regroupement - Axe X',
        'bar_chart.data_panel.field_x_axis.description':
          'Que voulez-vous que chaque barre représente ? Un exemple pourrait être un champ `catégorie de produit` pour représenter chaque catégorie en tant que barre.',
        'bar_chart.data_panel.field_x_axis.call_to_action':
          'Ajouter un regroupement',
        'bar_chart.data_panel.sort.title': 'Tri',
        'bar_chart.data_panel.sort.description':
          "Sélectionner l'ordre des catégories ou du temps sur l'axe X.",
        'bar_chart.data_panel.filter.title': 'Filtres',
        'bar_chart.data_panel.filter.description':
          'Inclure uniquement les informations que vous souhaitez utiliser dans ce diagramme en barres.',
        'bar_chart.data_panel.custom_metrics.title': 'Métriques personnalisées',
        'bar_chart.data_panel.custom_metrics.description':
          "Construire vos propres métriques, telles qu'un pourcentage.",
        'bar_chart.data_panel.limit.title': 'Limite',
        'bar_chart.data_panel.limit.description':
          "Définir le nombre maximal d'enregistrements à afficher sur ce diagramme en barres.",
        'bar_chart.format_panel.heading.title': 'En-tête',
        'bar_chart.format_panel.heading.title.title': 'Titre',
        'bar_chart.format_panel.heading.subject.title': 'Sujet',
        'bar_chart.format_panel.chart_styles.title': 'Paramètres du graphique',
        'bar_chart.format_panel.chart_styles.stacked.title': 'Disposition',
        'bar_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'bar_chart.format_panel.axis_labels.title': 'Préférences des axes',
        'bar_chart.format_panel.axis_labels.x.title': 'Axe X',
        'bar_chart.format_panel.axis_labels.x.prefix.title': 'Préfixe',
        'bar_chart.format_panel.axis_labels.x.postfix.title': 'Suffixe',
        'bar_chart.format_panel.axis_labels.x.format.title': 'Format',
        'bar_chart.format_panel.axis_labels.x.count.title':
          "Nombre d'étiquettes",
        'bar_chart.format_panel.axis_labels.x.axis_title.title': 'Titre',
        'bar_chart.format_panel.axis_labels.y.title': 'Axe Y',
        'bar_chart.format_panel.axis_labels.y.prefix.title': 'Préfixe',
        'bar_chart.format_panel.axis_labels.y.postfix.title': 'Suffixe',
        'bar_chart.format_panel.axis_labels.y.format.title': 'Format',
        'bar_chart.format_panel.axis_labels.y.count.title':
          "Nombre d'étiquettes",
        'bar_chart.format_panel.axis_labels.y.axis_title.title': 'Titre',
        'bar_chart.format_panel.goal_line.title': "Lignes d'objectif",
        'bar_chart.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'area_chart.title': 'Diagramme en aires',
        'area_chart.description':
          'Affiche les données sous forme de zones sur un graphique, utile pour montrer les tendances dans le temps.',
        'area_chart.data_panel.data_set.title': 'Jeu de données',
        'area_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce graphique en aires ?',
        'area_chart.data_panel.views.title': 'Vue',
        'area_chart.data_panel.field_y_axis.title': 'Métrique - Axe Y',
        'area_chart.data_panel.field_y_axis.description':
          'Que souhaitez-vous mesurer pour chaque aire ?',
        'area_chart.data_panel.field_y_axis.call_to_action':
          'Ajouter une métrique',
        'area_chart.data_panel.field_x_axis.title': 'Regroupement - Axe X',
        'area_chart.data_panel.field_x_axis.description':
          "Que souhaitez-vous représenter par chaque aire ? Un exemple pourrait être un ID d'employé pour représenter chaque employé.",
        'area_chart.data_panel.field_x_axis.call_to_action':
          'Ajouter un regroupement',
        'area_chart.data_panel.sort.title': 'Trier',
        'area_chart.data_panel.sort.description':
          "Sélectionnez l'ordre des catégories ou du temps sur l'axe X.",
        'area_chart.data_panel.filter.title': 'Filtres',
        'area_chart.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser dans ce graphique en aires.',
        'area_chart.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'area_chart.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'area_chart.data_panel.limit.title': 'Limite',
        'area_chart.data_panel.limit.description':
          "Définissez le nombre maximal d'enregistrements à afficher sur ce graphique en aires.",
        'area_chart.format_panel.heading.title': 'En-tête',
        'area_chart.format_panel.heading.title.title': 'Titre',
        'area_chart.format_panel.heading.subject.title': 'Sujet',
        'area_chart.format_panel.chart_styles.title': 'Paramètres du graphique',
        'area_chart.format_panel.chart_styles.stacked.title': 'Disposition',
        'area_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'area_chart.format_panel.chart_styles.curve.title':
          'Courbe de la ligne',
        'area_chart.format_panel.axis_labels.title': "Préférences d'axe",
        'area_chart.format_panel.axis_labels.x.title': 'Axe X',
        'area_chart.format_panel.axis_labels.x.prefix.title': 'Préfixe',
        'area_chart.format_panel.axis_labels.x.postfix.title': 'Suffixe',
        'area_chart.format_panel.axis_labels.x.format.title': 'Format',
        'area_chart.format_panel.axis_labels.x.count.title':
          "Nombre d'étiquettes",
        'area_chart.format_panel.axis_labels.x.axis_title.title': 'Titre',
        'area_chart.format_panel.axis_labels.y.title': 'Axe Y',
        'area_chart.format_panel.axis_labels.y.prefix.title': 'Préfixe',
        'area_chart.format_panel.axis_labels.y.postfix.title': 'Suffixe',
        'area_chart.format_panel.axis_labels.y.format.title': 'Format',
        'area_chart.format_panel.axis_labels.y.count.title':
          "Nombre d'étiquettes",
        'area_chart.format_panel.axis_labels.y.axis_title.title': 'Titre',
        'area_chart.format_panel.goal_line.title': 'Lignes de but',
        'combo_chart.title': 'Graphique combiné',
        'combo_chart.description':
          'Un composant polyvalent qui combine différents types de graphiques.',
        'combo_chart.data_panel.data_set.title': 'Jeu de données',
        'combo_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce graphique combiné ?',
        'combo_chart.data_panel.views.title': 'Vue',
        'combo_chart.data_panel.labelled_metrics.title': 'Métrique - Axe Y',
        'combo_chart.data_panel.labelled_metrics.description':
          'Que souhaitez-vous mesurer pour chaque ligne et barre ?',
        'combo_chart.data_panel.labelled_metrics.metrics.line.title': 'Ligne',
        'combo_chart.data_panel.labelled_metrics.metrics.bar.title': 'Barre',
        'combo_chart.data_panel.combo_chart_dimension.title':
          'Regroupement - Axe X',
        'combo_chart.data_panel.sort.title': 'Trier',
        'combo_chart.data_panel.sort.description':
          "Sélectionnez l'ordre des catégories ou du temps sur l'axe X.",
        'combo_chart.data_panel.filter.title': 'Filtres',
        'combo_chart.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser dans ce graphique combiné.',
        'combo_chart.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'combo_chart.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'combo_chart.data_panel.limit.title': 'Limite',
        'combo_chart.data_panel.limit.description':
          "Définissez le nombre maximal d'enregistrements à afficher sur ce graphique en barres.",
        'combo_chart.format_panel.heading.title': 'En-tête',
        'combo_chart.format_panel.heading.title.title': 'Titre',
        'combo_chart.format_panel.heading.subject.title': 'Sujet',
        'combo_chart.format_panel.chart_styles.title':
          'Paramètres du graphique',
        'combo_chart.format_panel.chart_styles.stacked.title': 'Disposition',
        'combo_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'combo_chart.format_panel.axis_labels.title': "Préférences d'axe",
        'combo_chart.format_panel.axis_labels.x.title': 'Axe X',
        'combo_chart.format_panel.axis_labels.x.prefix.title': 'Préfixe',
        'combo_chart.format_panel.axis_labels.x.postfix.title': 'Suffixe',
        'combo_chart.format_panel.axis_labels.x.format.title': 'Format',
        'combo_chart.format_panel.axis_labels.x.count.title':
          "Nombre d'étiquettes",
        'combo_chart.format_panel.axis_labels.x.axis_title.title': 'Titre',
        'combo_chart.format_panel.axis_labels.y.title': 'Axe Y',
        'combo_chart.format_panel.axis_labels.y.prefix.title': 'Préfixe',
        'combo_chart.format_panel.axis_labels.y.postfix.title': 'Suffixe',
        'combo_chart.format_panel.axis_labels.y.format.title': 'Format',
        'combo_chart.format_panel.axis_labels.y.count.title':
          "Nombre d'étiquettes",
        'combo_chart.format_panel.axis_labels.y.axis_title.title': 'Titre',
        'combo_chart.format_panel.goal_line.title': 'Lignes de but',
        'combo_chart.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'combo_chart.format_panel.conditional_formatting.bar.title': 'Barre',
        'basic_table.title': 'Tableau basique',
        'basic_table.description':
          'Affiche les données dans un format de tableau simple et direct.',
        'basic_table.data_panel.data_set.title': 'Jeu de données',
        'basic_table.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce tableau basique ?',
        'basic_table.data_panel.views.title': 'Vue',
        'basic_table.data_panel.fields.title': 'Colonnes',
        'basic_table.data_panel.fields.description':
          'Sélectionnez les valeurs que vous souhaitez voir dans ce tableau',
        'basic_table.data_panel.sort.title': 'Trier',
        'basic_table.data_panel.sort.description':
          "Sélectionnez l'ordre des catégories ou du temps sur l'axe X.",
        'basic_table.data_panel.filter.title': 'Filtres',
        'basic_table.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser dans ce tableau basique.',
        'basic_table.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'basic_table.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'basic_table.data_panel.pagination.title': 'Pagination',
        'basic_table.data_panel.pagination.description':
          'Définissez la taille de chaque page dans le tableau',
        'basic_table.format_panel.heading.title': 'En-tête',
        'basic_table.format_panel.heading.title.title': 'Titre',
        'basic_table.format_panel.heading.subject.title': 'Sujet',
        'basic_table.format_panel.format.title': 'Format',
        'basic_table.format_panel.format.time.title': 'Temps',
        'basic_table.format_panel.prefixes.title': 'Préfixes',
        'basic_table.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'pivot_table.title': 'Tableau croisé dynamique',
        'pivot_table.description':
          'Transforme les données en un tableau avec des lignes et des colonnes dynamiques.',
        'pivot_table.data_panel.data_set.title': 'Jeu de données',
        'pivot_table.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce tableau de données ?',
        'pivot_table.data_panel.views.title': 'Vue',
        'pivot_table.data_panel.field_columns.title': 'Colonnes de groupe',
        'pivot_table.data_panel.field_columns.call_to_action':
          'Ajouter une colonne de groupe',
        'pivot_table.data_panel.field_rows.title': 'Lignes de groupe',
        'pivot_table.data_panel.field_rows.description':
          "Quel champ souhaitez-vous utiliser pour grouper chaque ligne ? Un exemple pourrait être un ID d'employé ou une localisation géographique",
        'pivot_table.data_panel.field_rows.call_to_action':
          'Ajouter une ligne de groupe',
        'pivot_table.data_panel.drilldown.title': 'Analyse approfondie',
        'pivot_table.data_panel.drilldown.description':
          'Les analyses approfondies dans un tableau croisé dynamique révèlent les données sous-jacentes contribuant aux chiffres résumés lors du clic.',
        'pivot_table.data_panel.field_metrics.title': 'Métriques',
        'pivot_table.data_panel.field_metrics.description':
          'Sélectionnez les colonnes à afficher dans le tableau de données',
        'pivot_table.data_panel.field_metrics.call_to_action':
          'Ajouter une métrique',
        'pivot_table.data_panel.sort.title': 'Trier',
        'pivot_table.data_panel.sort.description':
          "Sélectionnez l'ordre des catégories ou du temps sur l'axe X.",
        'pivot_table.data_panel.filter.title': 'Filtres',
        'pivot_table.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser dans ce tableau de données.',
        'pivot_table.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'pivot_table.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'pivot_table.data_panel.pagination.title': 'Pagination',
        'pivot_table.data_panel.pagination.description':
          'Définissez la taille de chaque page dans le tableau',
        'pivot_table.format_panel.heading.title': 'En-tête',
        'pivot_table.format_panel.heading.title.title': 'Titre',
        'pivot_table.format_panel.heading.subject.title': 'Sujet',
        'pivot_table.format_panel.format.title': 'Format',
        'pivot_table.format_panel.format.time.title': 'Temps',
        'pivot_table.format_panel.prefixes.title': 'Préfixes',
        'pivot_table.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'horizontal_bar_chart.title': 'Graphique à barres horizontales',
        'horizontal_bar_chart.description':
          'Similaire à un graphique à barres mais avec des barres horizontales.',
        'horizontal_bar_chart.data_panel.data_set.title': 'Jeu de données',
        'horizontal_bar_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce graphique à barres horizontales ?',
        'horizontal_bar_chart.data_panel.views.title': 'Vue',
        'horizontal_bar_chart.data_panel.field_y_axis.title':
          'Métrique - Axe Y',
        'horizontal_bar_chart.data_panel.field_y_axis.description':
          'Que souhaitez-vous mesurer pour chaque barre ?',
        'horizontal_bar_chart.data_panel.field_y_axis.call_to_action':
          'Ajouter une métrique',
        'horizontal_bar_chart.data_panel.drilldown.title':
          'Analyse approfondie',
        'horizontal_bar_chart.data_panel.drilldown.description':
          'Après avoir cliqué sur un segment de ce graphique à barres, quelles informations souhaitez-vous voir ensuite ?',
        'horizontal_bar_chart.data_panel.field_x_axis.title':
          'Regroupement - Axe X',
        'horizontal_bar_chart.data_panel.field_x_axis.description':
          'Que souhaitez-vous représenter par chaque barre ? Un exemple pourrait être un champ `catégorie de produit` pour représenter chaque catégorie en tant que barre.',
        'horizontal_bar_chart.data_panel.field_x_axis.call_to_action':
          'Ajouter un regroupement',
        'horizontal_bar_chart.data_panel.sort.title': 'Trier',
        'horizontal_bar_chart.data_panel.sort.description':
          "Sélectionnez l'ordre des catégories ou du temps sur l'axe X.",
        'horizontal_bar_chart.data_panel.filter.title': 'Filtres',
        'horizontal_bar_chart.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser dans ce graphique à barres horizontales.',
        'horizontal_bar_chart.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'horizontal_bar_chart.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'horizontal_bar_chart.data_panel.limit.title': 'Limite',
        'horizontal_bar_chart.data_panel.limit.description':
          "Définissez le nombre maximal d'enregistrements à afficher sur ce graphique à barres horizontales.",
        'horizontal_bar_chart.format_panel.heading.title': 'En-tête',
        'horizontal_bar_chart.format_panel.heading.title.title': 'Titre',
        'horizontal_bar_chart.format_panel.heading.subject.title': 'Sujet',
        'horizontal_bar_chart.format_panel.chart_styles.title':
          'Paramètres du graphique',
        'horizontal_bar_chart.format_panel.chart_styles.stacked.title':
          'Disposition',
        'horizontal_bar_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'horizontal_bar_chart.format_panel.axis_labels.title':
          'Préférences des axes',
        'horizontal_bar_chart.format_panel.axis_labels.x.title': 'Axe X',
        'horizontal_bar_chart.format_panel.axis_labels.x.prefix.title':
          'Préfixe',
        'horizontal_bar_chart.format_panel.axis_labels.x.postfix.title':
          'Suffixe',
        'horizontal_bar_chart.format_panel.axis_labels.x.format.title':
          'Format',
        'horizontal_bar_chart.format_panel.axis_labels.x.count.title':
          "Nombre d'étiquettes",
        'horizontal_bar_chart.format_panel.axis_labels.x.axis_title.title':
          'Titre',
        'horizontal_bar_chart.format_panel.axis_labels.y.title': 'Axe Y',
        'horizontal_bar_chart.format_panel.axis_labels.y.prefix.title':
          'Préfixe',
        'horizontal_bar_chart.format_panel.axis_labels.y.postfix.title':
          'Suffixe',
        'horizontal_bar_chart.format_panel.axis_labels.y.format.title':
          'Format',
        'horizontal_bar_chart.format_panel.axis_labels.y.count.title':
          "Nombre d'étiquettes",
        'horizontal_bar_chart.format_panel.axis_labels.y.axis_title.title':
          'Titre',
        'horizontal_bar_chart.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'line_chart.title': 'Graphique en ligne',
        'line_chart.description':
          'Idéal pour illustrer les changements et les tendances au fil du temps avec des graphiques en ligne.',
        'line_chart.data_panel.data_set.title': 'Jeu de données',
        'line_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce graphique en ligne ?',
        'line_chart.data_panel.views.title': 'Vue',
        'line_chart.data_panel.field_y_axis.title': 'Métrique - Axe Y',
        'line_chart.data_panel.field_y_axis.description':
          'Que souhaitez-vous mesurer pour chaque ligne ?',
        'line_chart.data_panel.field_y_axis.call_to_action':
          'Ajouter une métrique',
        'line_chart.data_panel.drilldown.title': 'Drilldown',
        'line_chart.data_panel.drilldown.description':
          'Après avoir cliqué sur un segment de ce graphique en ligne, quelles informations souhaitez-vous voir ensuite ?',
        'line_chart.data_panel.field_x_axis.title': 'Groupement - Axe X',
        'line_chart.data_panel.field_x_axis.description':
          'Que souhaitez-vous représenter pour chaque ligne ? Un exemple pourrait être un champ `catégorie de produit` pour représenter chaque catégorie en tant que ligne.',
        'line_chart.data_panel.field_x_axis.call_to_action':
          'Ajouter un groupement',
        'line_chart.data_panel.sort.title': 'Trier',
        'line_chart.data_panel.sort.description':
          "Sélectionnez l'ordre des catégories ou du temps sur l'axe X.",
        'line_chart.data_panel.filter.title': 'Filtres',
        'line_chart.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser dans ce graphique en ligne.',
        'line_chart.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'line_chart.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'line_chart.data_panel.limit.title': 'Limite',
        'line_chart.data_panel.limit.description':
          "Définissez le nombre maximum d'enregistrements à afficher sur ce graphique en ligne.",
        'line_chart.format_panel.heading.title': 'En-tête',
        'line_chart.format_panel.heading.title.title': 'Titre',
        'line_chart.format_panel.heading.subject.title': 'Sujet',
        'line_chart.format_panel.chart_styles.title': 'Paramètres du graphique',
        'line_chart.format_panel.chart_styles.curve.title':
          'Courbe de la ligne',
        'line_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'line_chart.format_panel.axis_labels.title': 'Préférences des axes',
        'line_chart.format_panel.axis_labels.x.title': 'Axe X',
        'line_chart.format_panel.axis_labels.x.prefix.title': 'Préfixe',
        'line_chart.format_panel.axis_labels.x.postfix.title': 'Suffixe',
        'line_chart.format_panel.axis_labels.x.format.title': 'Format',
        'line_chart.format_panel.axis_labels.x.count.title':
          "Nombre d'étiquettes",
        'line_chart.format_panel.axis_labels.x.axis_title.title': 'Titre',
        'line_chart.format_panel.axis_labels.y.title': 'Axe Y',
        'line_chart.format_panel.axis_labels.y.prefix.title': 'Préfixe',
        'line_chart.format_panel.axis_labels.y.postfix.title': 'Suffixe',
        'line_chart.format_panel.axis_labels.y.format.title': 'Format',
        'line_chart.format_panel.axis_labels.y.count.title':
          "Nombre d'étiquettes",
        'line_chart.format_panel.axis_labels.y.axis_title.title': 'Titre',
        'line_chart.format_panel.goal_line.title': "Lignes d'objectif",
        'mercator_map.title': 'Carte des pays',
        'mercator_map.description':
          'Un composant de carte basé sur la projection de Mercator, adapté à la visualisation de données géographiques.',
        'mercator_map.data_panel.data_set.title': 'Jeu de données',
        'mercator_map.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser pour cette carte ?',
        'mercator_map.data_panel.views.title': 'Vue',
        'mercator_map.data_panel.field_metrics.title': 'Métrique',
        'mercator_map.data_panel.field_metrics.description':
          'Que souhaitez-vous montrer ?',
        'mercator_map.data_panel.field_metrics.call_to_action':
          'Ajouter une métrique',
        'mercator_map.data_panel.field_country.title': 'Pays',
        'mercator_map.data_panel.field_country.description':
          'Quel champ contient le code du pays nécessaire pour regrouper les résultats ?',
        'mercator_map.data_panel.field_country.call_to_action':
          'Définir le pays',
        'mercator_map.data_panel.filter.title': 'Filtres',
        'mercator_map.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez utiliser sur cette carte.',
        'mercator_map.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'mercator_map.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'mercator_map.data_panel.limit.title': 'Limite',
        'mercator_map.data_panel.limit.description':
          "Définissez le nombre maximum d'enregistrements à afficher sur cette carte.",
        'mercator_map.format_panel.heading.title': 'En-tête',
        'mercator_map.format_panel.heading.title.title': 'Titre',
        'mercator_map.format_panel.heading.subject.title': 'Sujet',
        'mercator_map.format_panel.chart_styles.title':
          'Paramètres de la carte',
        'mercator_map.format_panel.chart_styles.number_format.title':
          'Format de la valeur',
        'mercator_map.format_panel.map_colors.title': 'Couleurs de la carte',
        'pie_chart.title': 'Graphique en secteurs',
        'pie_chart.description':
          'Représente les données dans un format circulaire semblable à une tarte, utile pour montrer les proportions.',
        'pie_chart.data_panel.data_set.title': 'Jeu de données',
        'pie_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce graphique en secteurs ?',
        'pie_chart.data_panel.views.title': 'Vue',
        'pie_chart.data_panel.field_metrics.title': 'Métrique',
        'pie_chart.data_panel.field_metrics.description':
          'Que souhaitez-vous mesurer pour chaque segment ?',
        'pie_chart.data_panel.field_metrics.call_to_action':
          'Ajouter une métrique',
        'pie_chart.data_panel.field_grouping.title': 'Groupement',
        'pie_chart.data_panel.field_grouping.description':
          'Comment souhaitez-vous diviser chaque section du graphique en secteurs ?',
        'pie_chart.data_panel.field_grouping.call_to_action':
          'Ajouter une comparaison',
        'pie_chart.data_panel.sort.title': 'Trier',
        'pie_chart.data_panel.sort.description':
          "Choisissez l'ordre des segments dans le graphique en secteurs",
        'pie_chart.data_panel.filter.title': 'Filtres',
        'pie_chart.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez dans ce graphique en secteurs.',
        'pie_chart.data_panel.custom_metrics.title': 'Métriques personnalisées',
        'pie_chart.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'pie_chart.data_panel.limit.title': 'Limite',
        'pie_chart.data_panel.limit.description':
          'Limitez le nombre de segments affichés sur ce graphique en secteurs.',
        'pie_chart.format_panel.heading.title': 'En-tête',
        'pie_chart.format_panel.heading.title.title': 'Titre',
        'pie_chart.format_panel.heading.subject.title': 'Sujet',
        'pie_chart.format_panel.chart_styles.title': 'Paramètres du graphique',
        'pie_chart.format_panel.chart_styles.number_format.title': 'Format',
        'pie_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'pie_chart.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'progress.title': 'Progression',
        'progress.description':
          "Utilisé pour montrer la progression vers les objectifs, l'achèvement des tâches ou comme indicateurs de métriques de performance.",
        'progress.data_panel.data_set.title': 'Jeu de données',
        'progress.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans cette progression ?',
        'progress.data_panel.views.title': 'Vue',
        'progress.data_panel.progress_goals.title': 'Métrique',
        'progress.data_panel.progress_goals.description':
          'Que souhaitez-vous montrer dans chaque barre de progression ?',
        'progress.data_panel.filter.title': 'Filtres',
        'progress.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez dans ce graphique de progression.',
        'progress.data_panel.custom_metrics.title': 'Métriques personnalisées',
        'progress.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'progress.format_panel.heading.title': 'En-tête',
        'progress.format_panel.heading.title.title': 'Titre',
        'progress.format_panel.heading.subject.title': 'Sujet',
        'progress.format_panel.stats_labels.title': 'Étiquettes',
        'progress.format_panel.stats_labels.prefix.title': 'Préfixe',
        'progress.format_panel.stats_labels.postfix.title': 'Suffixe',
        'progress.format_panel.stats_labels.format.title': 'Format',
        'progress.format_panel.stats_labels.count.title': "Nombre d'étiquettes",
        'progress.format_panel.progress_type.title': 'Type',
        'scatter_chart.title': 'Graphique de dispersion',
        'scatter_chart.description':
          'Affiche des points de données sur un plan cartésien, parfait pour montrer les corrélations.',
        'scatter_chart.data_panel.data_set.title': 'Jeu de données',
        'scatter_chart.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans ce graphique de dispersion ?',
        'scatter_chart.data_panel.views.title': 'Vue',
        'scatter_chart.data_panel.labelled_metrics.title': 'Métrique - Axe Y',
        'scatter_chart.data_panel.labelled_metrics.metrics.xAxis.title':
          'Axe X',
        'scatter_chart.data_panel.labelled_metrics.metrics.yAxis.title':
          'Axe Y',
        'scatter_chart.data_panel.field_grouping.title': 'Groupement',
        'scatter_chart.data_panel.field_grouping.description':
          'Que souhaitez-vous représenter par chaque point ?',
        'scatter_chart.data_panel.field_grouping.call_to_action':
          'Ajouter une comparaison',
        'scatter_chart.data_panel.filter.title': 'Filtres',
        'scatter_chart.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez dans ce graphique de dispersion.',
        'scatter_chart.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'scatter_chart.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'scatter_chart.data_panel.limit.title': 'Limite',
        'scatter_chart.data_panel.limit.description':
          'Limitez le nombre de points de données affichés sur ce graphique de dispersion.',
        'scatter_chart.format_panel.heading.title': 'En-tête',
        'scatter_chart.format_panel.heading.title.title': 'Titre',
        'scatter_chart.format_panel.heading.subject.title': 'Sujet',
        'scatter_chart.format_panel.chart_styles.title':
          'Paramètres du graphique',
        'scatter_chart.format_panel.chart_styles.legend.title':
          'Afficher la légende',
        'scatter_chart.format_panel.axis_labels.title': 'Préférences des axes',
        'scatter_chart.format_panel.axis_labels.x.title': 'Axe X',
        'scatter_chart.format_panel.axis_labels.x.prefix.title': 'Préfixe',
        'scatter_chart.format_panel.axis_labels.x.postfix.title': 'Suffixe',
        'scatter_chart.format_panel.axis_labels.x.format.title': 'Format',
        'scatter_chart.format_panel.axis_labels.x.count.title':
          "Nombre d'étiquettes",
        'scatter_chart.format_panel.axis_labels.x.axis_title.title': 'Titre',
        'scatter_chart.format_panel.axis_labels.y.title': 'Axe Y',
        'scatter_chart.format_panel.axis_labels.y.prefix.title': 'Préfixe',
        'scatter_chart.format_panel.axis_labels.y.postfix.title': 'Suffixe',
        'scatter_chart.format_panel.axis_labels.y.format.title': 'Format',
        'scatter_chart.format_panel.axis_labels.y.count.title':
          "Nombre d'étiquettes",
        'scatter_chart.format_panel.axis_labels.y.axis_title.title': 'Titre',
        'scatter_chart.format_panel.goal_line.title': "Lignes d'objectif",
        'single_stat.title': 'Statistique unique',
        'single_stat.description':
          'Affiche une valeur statistique unique, idéale pour la représentation de points de données clés.',
        'single_stat.data_panel.data_set.title': 'Jeu de données',
        'single_stat.data_panel.data_set.description':
          'Quelles données souhaitez-vous utiliser dans cette statistique unique ?',
        'single_stat.data_panel.views.title': 'Vue',
        'single_stat.data_panel.field_metrics.title': 'Métriques',
        'single_stat.data_panel.field_metrics.description':
          'Que souhaitez-vous afficher ?',
        'single_stat.data_panel.field_metrics.call_to_action':
          'Ajouter une métrique',
        'single_stat.data_panel.filter.title': 'Filtres',
        'single_stat.data_panel.filter.description':
          'Incluez uniquement les informations que vous souhaitez dans ce graphique de dispersion.',
        'single_stat.data_panel.custom_metrics.title':
          'Métriques personnalisées',
        'single_stat.data_panel.custom_metrics.description':
          "Construisez vos propres métriques, telles qu'un pourcentage.",
        'single_stat.data_panel.comparison.title': 'Comparaison',
        'single_stat.format_panel.heading.title': 'En-tête',
        'single_stat.format_panel.heading.title.title': 'Titre',
        'single_stat.format_panel.heading.subject.title': 'Sujet',
        'single_stat.format_panel.stats_labels.title': 'Étiquettes',
        'single_stat.format_panel.stats_labels.prefix.title': 'Préfixe',
        'single_stat.format_panel.stats_labels.postfix.title': 'Suffixe',
        'single_stat.format_panel.stats_labels.format.title': 'Format',
        'single_stat.format_panel.stats_labels.count.title':
          "Nombre d'étiquettes",
        'single_stat.format_panel.conditional_formatting.title':
          'Formatage conditionnel',
        'single_stat.format_panel.format.title': 'Format',
        'single_stat.format_panel.format.font_size.title': 'Taille de police',
        'config.supported_operator.>': 'Supérieur à',
        'config.supported_operator.<': 'Inférieur à',
        'config.supported_operator.<=': 'Inférieur ou égal à',
        'config.supported_operator.>=': 'Supérieur ou égal à',
        'config.supported_operator.!=': 'Différent de',
        'config.supported_operator.is_one_of': "Est l'un de",
        'config.supported_operator.=': 'Égal à',
        'config.supported_operator.is_not_one_of': "N'est pas l'un de",
        'config.supported_operator.starts_with': 'Commence par',
        'config.supported_operator.ends_with': 'Se termine par',
        'config.supported_operator.contains_substring': 'Contient du texte',
        'config.supported_operator.does_not_contain_substring':
          'Ne contient pas de texte',
        'config.supported_operator.array_contains': 'Contient',
        'config.supported_aggregate.mean': 'Moyenne',
        'config.supported_aggregate.sum': 'Somme',
        'config.supported_aggregate.min': 'Min',
        'config.supported_aggregate.max': 'Max',
        'config.supported_aggregate.count': 'Compte',
        'config.supported_aggregate.countDistinct': 'Unique',
        'config.supported_time.month': 'Mensuel',
        'config.supported_time.year': 'Annuel',
        'config.supported_time.quarter': 'Par trimestre',
        'config.supported_time.week': 'Hebdomadaire',
        'config.supported_time.day': 'Quotidien',
        'config.supported_time.second': 'Par seconde',
        'config.supported_time.hour': 'Horaire',
        'config.supported_time.minute': 'Par minute',
        'table_settings.show_more': 'Afficher plus',
        'table_settings.title': 'Titre',
        'table_settings.format': 'Format',
        'table_settings.sort': 'Trier',
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};
