import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderTopElement
 * @class IconOutlineBorderTopElement
 * @extends {AoflElement}
 */
class IconOutlineBorderTopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderTopElement.is, IconOutlineBorderTopElement);

export default IconOutlineBorderTopElement;
