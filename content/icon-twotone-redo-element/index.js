import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRedoElement
 * @class IconTwotoneRedoElement
 * @extends {AoflElement}
 */
class IconTwotoneRedoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRedoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-redo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRedoElement.is, IconTwotoneRedoElement);

export default IconTwotoneRedoElement;
