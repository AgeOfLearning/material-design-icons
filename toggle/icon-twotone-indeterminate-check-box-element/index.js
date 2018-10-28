import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneIndeterminateCheckBoxElement
 * @class IconTwotoneIndeterminateCheckBoxElement
 * @extends {AoflElement}
 */
class IconTwotoneIndeterminateCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneIndeterminateCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-indeterminate-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneIndeterminateCheckBoxElement.is, IconTwotoneIndeterminateCheckBoxElement);

export default IconTwotoneIndeterminateCheckBoxElement;
