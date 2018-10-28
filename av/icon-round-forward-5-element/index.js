import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundForward5Element
 * @class IconRoundForward5Element
 * @extends {AoflElement}
 */
class IconRoundForward5Element extends AoflElement {
  /**
   * Creates an instance of IconRoundForward5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-forward-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundForward5Element.is, IconRoundForward5Element);

export default IconRoundForward5Element;
