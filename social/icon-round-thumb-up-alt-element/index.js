import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundThumbUpAltElement
 * @class IconRoundThumbUpAltElement
 * @extends {AoflElement}
 */
class IconRoundThumbUpAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundThumbUpAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-thumb-up-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundThumbUpAltElement.is, IconRoundThumbUpAltElement);

export default IconRoundThumbUpAltElement;
