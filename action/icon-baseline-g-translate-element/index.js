import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGTranslateElement
 * @class IconBaselineGTranslateElement
 * @extends {AoflElement}
 */
class IconBaselineGTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-g-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGTranslateElement.is, IconBaselineGTranslateElement);

export default IconBaselineGTranslateElement;
