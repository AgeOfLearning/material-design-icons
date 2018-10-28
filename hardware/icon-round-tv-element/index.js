import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTvElement
 * @class IconRoundTvElement
 * @extends {AoflElement}
 */
class IconRoundTvElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTvElement.is, IconRoundTvElement);

export default IconRoundTvElement;
