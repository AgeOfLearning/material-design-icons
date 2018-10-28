import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVolumeMuteElement
 * @class IconBaselineVolumeMuteElement
 * @extends {AoflElement}
 */
class IconBaselineVolumeMuteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVolumeMuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-volume-mute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVolumeMuteElement.is, IconBaselineVolumeMuteElement);

export default IconBaselineVolumeMuteElement;
