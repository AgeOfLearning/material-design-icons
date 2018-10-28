import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalAtmElement
 * @class IconBaselineLocalAtmElement
 * @extends {AoflElement}
 */
class IconBaselineLocalAtmElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalAtmElement.is, IconBaselineLocalAtmElement);

export default IconBaselineLocalAtmElement;
