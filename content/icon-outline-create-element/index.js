import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCreateElement
 * @class IconOutlineCreateElement
 * @extends {AoflElement}
 */
class IconOutlineCreateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCreateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-create';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCreateElement.is, IconOutlineCreateElement);

export default IconOutlineCreateElement;
