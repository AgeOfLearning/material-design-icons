import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRepeatOneElement
 * @class IconRoundRepeatOneElement
 * @extends {AoflElement}
 */
class IconRoundRepeatOneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRepeatOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-repeat-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRepeatOneElement.is, IconRoundRepeatOneElement);

export default IconRoundRepeatOneElement;
