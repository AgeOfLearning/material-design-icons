import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArchiveElement
 * @class IconOutlineArchiveElement
 * @extends {AoflElement}
 */
class IconOutlineArchiveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-archive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArchiveElement.is, IconOutlineArchiveElement);

export default IconOutlineArchiveElement;
