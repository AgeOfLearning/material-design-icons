import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoreElement
 * @class IconRoundMoreElement
 * @extends {AoflElement}
 */
class IconRoundMoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoreElement.is, IconRoundMoreElement);

export default IconRoundMoreElement;
