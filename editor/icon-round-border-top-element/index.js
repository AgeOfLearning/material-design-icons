import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderTopElement
 * @class IconRoundBorderTopElement
 * @extends {AoflElement}
 */
class IconRoundBorderTopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderTopElement.is, IconRoundBorderTopElement);

export default IconRoundBorderTopElement;
