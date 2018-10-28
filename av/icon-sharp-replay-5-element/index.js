import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReplay5Element
 * @class IconSharpReplay5Element
 * @extends {AoflElement}
 */
class IconSharpReplay5Element extends AoflElement {
  /**
   * Creates an instance of IconSharpReplay5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-replay-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReplay5Element.is, IconSharpReplay5Element);

export default IconSharpReplay5Element;
