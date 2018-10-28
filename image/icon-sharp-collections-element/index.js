import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCollectionsElement
 * @class IconSharpCollectionsElement
 * @extends {AoflElement}
 */
class IconSharpCollectionsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCollectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-collections';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCollectionsElement.is, IconSharpCollectionsElement);

export default IconSharpCollectionsElement;
