import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCollectionsElement
 * @class IconTwotoneCollectionsElement
 * @extends {AoflElement}
 */
class IconTwotoneCollectionsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCollectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-collections';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCollectionsElement.is, IconTwotoneCollectionsElement);

export default IconTwotoneCollectionsElement;
