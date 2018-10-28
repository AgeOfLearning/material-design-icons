import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSaveElement
 * @class IconRoundSaveElement
 * @extends {AoflElement}
 */
class IconRoundSaveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-save';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSaveElement.is, IconRoundSaveElement);

export default IconRoundSaveElement;
