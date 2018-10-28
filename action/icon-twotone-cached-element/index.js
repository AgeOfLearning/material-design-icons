import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCachedElement
 * @class IconTwotoneCachedElement
 * @extends {AoflElement}
 */
class IconTwotoneCachedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCachedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cached';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCachedElement.is, IconTwotoneCachedElement);

export default IconTwotoneCachedElement;
