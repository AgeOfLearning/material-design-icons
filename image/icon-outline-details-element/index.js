import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDetailsElement
 * @class IconOutlineDetailsElement
 * @extends {AoflElement}
 */
class IconOutlineDetailsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDetailsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-details';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDetailsElement.is, IconOutlineDetailsElement);

export default IconOutlineDetailsElement;
