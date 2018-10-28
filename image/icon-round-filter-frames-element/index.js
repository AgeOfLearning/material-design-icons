import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterFramesElement
 * @class IconRoundFilterFramesElement
 * @extends {AoflElement}
 */
class IconRoundFilterFramesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterFramesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-frames';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterFramesElement.is, IconRoundFilterFramesElement);

export default IconRoundFilterFramesElement;
