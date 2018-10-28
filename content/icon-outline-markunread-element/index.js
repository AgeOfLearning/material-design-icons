import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMarkunreadElement
 * @class IconOutlineMarkunreadElement
 * @extends {AoflElement}
 */
class IconOutlineMarkunreadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMarkunreadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-markunread';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMarkunreadElement.is, IconOutlineMarkunreadElement);

export default IconOutlineMarkunreadElement;
