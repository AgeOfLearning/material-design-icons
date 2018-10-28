import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderColorElement
 * @class IconRoundBorderColorElement
 * @extends {AoflElement}
 */
class IconRoundBorderColorElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderColorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-color';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderColorElement.is, IconRoundBorderColorElement);

export default IconRoundBorderColorElement;
