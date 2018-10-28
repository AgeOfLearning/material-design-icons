import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLiveTvElement
 * @class IconTwotoneLiveTvElement
 * @extends {AoflElement}
 */
class IconTwotoneLiveTvElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLiveTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-live-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLiveTvElement.is, IconTwotoneLiveTvElement);

export default IconTwotoneLiveTvElement;
