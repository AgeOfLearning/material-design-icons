import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCachedElement
 * @class IconOutlineCachedElement
 * @extends {AoflElement}
 */
class IconOutlineCachedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCachedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cached';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCachedElement.is, IconOutlineCachedElement);

export default IconOutlineCachedElement;
