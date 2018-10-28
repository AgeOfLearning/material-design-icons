import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineIndeterminateCheckBoxElement
 * @class IconOutlineIndeterminateCheckBoxElement
 * @extends {AoflElement}
 */
class IconOutlineIndeterminateCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineIndeterminateCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-indeterminate-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineIndeterminateCheckBoxElement.is, IconOutlineIndeterminateCheckBoxElement);

export default IconOutlineIndeterminateCheckBoxElement;
