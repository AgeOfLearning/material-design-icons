import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWhatshotElement
 * @class IconBaselineWhatshotElement
 * @extends {AoflElement}
 */
class IconBaselineWhatshotElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWhatshotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-whatshot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWhatshotElement.is, IconBaselineWhatshotElement);

export default IconBaselineWhatshotElement;
