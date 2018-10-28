import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoreVertElement
 * @class IconOutlineMoreVertElement
 * @extends {AoflElement}
 */
class IconOutlineMoreVertElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoreVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-more-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoreVertElement.is, IconOutlineMoreVertElement);

export default IconOutlineMoreVertElement;
