import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStoreMallDirectoryElement
 * @class IconRoundStoreMallDirectoryElement
 * @extends {AoflElement}
 */
class IconRoundStoreMallDirectoryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStoreMallDirectoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-store-mall-directory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStoreMallDirectoryElement.is, IconRoundStoreMallDirectoryElement);

export default IconRoundStoreMallDirectoryElement;
