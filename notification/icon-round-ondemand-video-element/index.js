import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOndemandVideoElement
 * @class IconRoundOndemandVideoElement
 * @extends {AoflElement}
 */
class IconRoundOndemandVideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOndemandVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-ondemand-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOndemandVideoElement.is, IconRoundOndemandVideoElement);

export default IconRoundOndemandVideoElement;
