import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTranslateElement
 * @class IconBaselineTranslateElement
 * @extends {AoflElement}
 */
class IconBaselineTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTranslateElement.is, IconBaselineTranslateElement);

export default IconBaselineTranslateElement;
