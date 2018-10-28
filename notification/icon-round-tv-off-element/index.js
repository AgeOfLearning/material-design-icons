import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTvOffElement
 * @class IconRoundTvOffElement
 * @extends {AoflElement}
 */
class IconRoundTvOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTvOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tv-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTvOffElement.is, IconRoundTvOffElement);

export default IconRoundTvOffElement;
