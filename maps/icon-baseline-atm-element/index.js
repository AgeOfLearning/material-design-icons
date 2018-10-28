import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAtmElement
 * @class IconBaselineAtmElement
 * @extends {AoflElement}
 */
class IconBaselineAtmElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAtmElement.is, IconBaselineAtmElement);

export default IconBaselineAtmElement;
