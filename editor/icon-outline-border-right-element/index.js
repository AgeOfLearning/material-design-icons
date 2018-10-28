import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderRightElement
 * @class IconOutlineBorderRightElement
 * @extends {AoflElement}
 */
class IconOutlineBorderRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderRightElement.is, IconOutlineBorderRightElement);

export default IconOutlineBorderRightElement;
