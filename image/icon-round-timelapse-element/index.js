import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimelapseElement
 * @class IconRoundTimelapseElement
 * @extends {AoflElement}
 */
class IconRoundTimelapseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTimelapseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-timelapse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimelapseElement.is, IconRoundTimelapseElement);

export default IconRoundTimelapseElement;
