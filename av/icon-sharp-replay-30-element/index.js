import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReplay30Element
 * @class IconSharpReplay30Element
 * @extends {AoflElement}
 */
class IconSharpReplay30Element extends AoflElement {
  /**
   * Creates an instance of IconSharpReplay30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-replay-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReplay30Element.is, IconSharpReplay30Element);

export default IconSharpReplay30Element;
