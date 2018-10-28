import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLanguageElement
 * @class IconBaselineLanguageElement
 * @extends {AoflElement}
 */
class IconBaselineLanguageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLanguageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-language';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLanguageElement.is, IconBaselineLanguageElement);

export default IconBaselineLanguageElement;
