import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLineStyleElement
 * @class IconBaselineLineStyleElement
 * @extends {AoflElement}
 */
class IconBaselineLineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-line-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLineStyleElement.is, IconBaselineLineStyleElement);

export default IconBaselineLineStyleElement;
