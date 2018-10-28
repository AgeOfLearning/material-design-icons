import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStyleElement
 * @class IconBaselineStyleElement
 * @extends {AoflElement}
 */
class IconBaselineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStyleElement.is, IconBaselineStyleElement);

export default IconBaselineStyleElement;
