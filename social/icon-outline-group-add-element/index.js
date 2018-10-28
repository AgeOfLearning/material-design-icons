import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGroupAddElement
 * @class IconOutlineGroupAddElement
 * @extends {AoflElement}
 */
class IconOutlineGroupAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGroupAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-group-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGroupAddElement.is, IconOutlineGroupAddElement);

export default IconOutlineGroupAddElement;
