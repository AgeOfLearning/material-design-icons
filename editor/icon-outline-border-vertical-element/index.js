import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderVerticalElement
 * @class IconOutlineBorderVerticalElement
 * @extends {AoflElement}
 */
class IconOutlineBorderVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderVerticalElement.is, IconOutlineBorderVerticalElement);

export default IconOutlineBorderVerticalElement;
