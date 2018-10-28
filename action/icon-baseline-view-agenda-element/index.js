import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewAgendaElement
 * @class IconBaselineViewAgendaElement
 * @extends {AoflElement}
 */
class IconBaselineViewAgendaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewAgendaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-agenda';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewAgendaElement.is, IconBaselineViewAgendaElement);

export default IconBaselineViewAgendaElement;
