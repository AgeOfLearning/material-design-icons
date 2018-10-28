import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDehazeElement
 * @class IconRoundDehazeElement
 * @extends {AoflElement}
 */
class IconRoundDehazeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDehazeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dehaze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDehazeElement.is, IconRoundDehazeElement);

export default IconRoundDehazeElement;
