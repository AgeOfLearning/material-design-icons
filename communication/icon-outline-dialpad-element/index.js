import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDialpadElement
 * @class IconOutlineDialpadElement
 * @extends {AoflElement}
 */
class IconOutlineDialpadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDialpadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dialpad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDialpadElement.is, IconOutlineDialpadElement);

export default IconOutlineDialpadElement;
