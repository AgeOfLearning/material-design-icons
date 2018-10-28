import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSubwayElement
 * @class IconRoundSubwayElement
 * @extends {AoflElement}
 */
class IconRoundSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSubwayElement.is, IconRoundSubwayElement);

export default IconRoundSubwayElement;
