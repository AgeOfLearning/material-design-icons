import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRepeatElement
 * @class IconRoundRepeatElement
 * @extends {AoflElement}
 */
class IconRoundRepeatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRepeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-repeat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRepeatElement.is, IconRoundRepeatElement);

export default IconRoundRepeatElement;
