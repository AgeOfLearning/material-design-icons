import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutline4KElement
 * @class IconOutline4KElement
 * @extends {AoflElement}
 */
class IconOutline4KElement extends AoflElement {
  /**
   * Creates an instance of IconOutline4KElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-4k';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutline4KElement.is, IconOutline4KElement);

export default IconOutline4KElement;
