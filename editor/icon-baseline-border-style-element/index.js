import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderStyleElement
 * @class IconBaselineBorderStyleElement
 * @extends {AoflElement}
 */
class IconBaselineBorderStyleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderStyleElement.is, IconBaselineBorderStyleElement);

export default IconBaselineBorderStyleElement;
